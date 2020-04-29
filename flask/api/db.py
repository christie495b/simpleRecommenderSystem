import sqlalchemy as dbsql
import pymysql

class db(object):
    def __init__(self, dbname):
        self.dbname = dbname
        self.connDB()
        
    
    def connDB(self):
        try:
            self.engg = dbsql.create_engine('mysql+pymysql://root:solutions@127.0.0.1/'+self.dbname, pool_recycle=3600)
            self.conn    = self.engg.connect()
            self.metadata = dbsql.MetaData()
            print(self.engg, self)
        except: 
            print("Can't connect to database") 

    def queryTable(self, tablename, queryString, limitNo, rowName):
        try:
            tbleObj = dbsql.Table(tablename, self.metadata, autoload=True, autoload_with=self.engg)
            query = dbsql.select([tbleObj]).where(tbleObj.columns.title.contains(queryString)).limit(limitNo)
            ResultProxy = self.conn.execute(query)
            return [row[rowName] for row in ResultProxy.fetchall()]
        except:
            return 'Something is wrong with the query'
        

    def __del__(self):
        # body of destructor
        # csr.close()
        self.conn.close()