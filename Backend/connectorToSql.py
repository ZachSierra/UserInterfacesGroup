"""
This script is used to connect to a MySQL server and insert data from a CSV file into a table.
This script uses the mysql-connector-python library to connect to the MySQL server so make sure to run
./setup.sh to install the necessary dependencies.

Please check out sqlcredentials.py and change your credentials accordingly.
"""
import mysql.connector
from sqlcredentials import HOST, USER, PASSWORD, DATABASE

mydb = mysql.connector.connect(
  host=HOST,
  user=USER,
  password=PASSWORD,
  database=DATABASE
)

# Create a cursor to interact with the database
cursor = mydb.cursor()

# Print a success message with the database name should return the name of the database
cursor.execute("SELECT DATABASE();")
database_name = cursor.fetchone()[0]
print(f"Connected to the database: {database_name}")

# Clean up
cursor.close()
mydb.close()


