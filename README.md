# DATA1050 Final Project 

![GitHub repo size](https://img.shields.io/github/repo-size/akshay7424/Data1050-Startup-Data-Final-Project)
![GitHub contributors](https://img.shields.io/github/contributors/akshay7424/Data1050-Startup-Data-Final-Project)
![GitHub stars](https://img.shields.io/github/stars/akshay7424/Data1050-Startup-Data-Final-Project)
![GitHub forks](https://img.shields.io/github/forks/akshay7424/Data1050-Startup-Data-Final-Project)

Type of project: DS Web Application <br/>
Final deliverables due 12:00pm EST, December 7, 2020<br/>

For the final project, we developed a database-backed website that provides the results of a data science project analyzing the success rates of startups.

## Assignment
Please see the assignment handout [**here**](https://docs.google.com/document/d/1uwpXgpEZpacViosYREnze5MGQFuVhMaRtYixxmIKXBU/edit).

## Setup
1. Create a local copy of your DATA1050 environment and activate it
`(base)$ conda activate data1050 `

1. **Install and configure Postgres.**<br/>
 `(data1050)$ conda install -y -c conda-forge postgres`<br/>
Initialize a database storage.<br/>
`(data1050)$ initdb -D mylocal_db`<br/>
Now start the postgres database server.<br/>
`(data1050)$ pg_ctl -D mylocal_db -l logfile start`<br/>

1. **Create a new database user and hw7 database.**<br/>
The following command creates a database user named ‘student’; when prompted, type a ‘data1050!’ as the password for that user (do not use your regular password):<br/>
`(data1050)$ createuser --encrypted --pwprompt student`<br/>
Initialize a database named “hw7” with the new user as the database owner.<br/>
`(data1050)$ createdb --owner=student hw7`<br/>
Examine your handy work via: <br/>
`(data1050)$ psql --username=student hw7`<br/>

1. **Install the python psycopg2 database connection package.**<br/>
`(data1050)$ conda install -y psycopg2`<br/>

1. **Install [`%sql` magic command](https://pypi.org/project/ipython-sql/)**. <br/>
IPython (which is used to run JupyterLab) allows one to write and run queries directly in notebook code cell if the first line in the cell contains `%sql` .  Install it via:  <br/>
`(data1050)$ conda install -y -c conda-forge ipython-sql`<br/>

1. **Install Jupyter Lab**<br/>
`(data1050)$ conda install -c conda-forge jupyterlab`<br/>
Test your installation by running `jupyter lab`<br/>

please open the provided .ipynb files by running Jupyter Lab using the DATA 1050 environment.  You can also do this inside vscode (be sure to select your updated DATA1050 version of python as your python interpreter).

## Contact
* [@akshay7424](https://github.com/akshay7424) at akshay_shah@brown.edu 🐛
* [@tashakim](https://github.com/tashakim) at tasha_kim@brown.edu🐛
* [@harry](https://github.com/tashakim) at harry_chalfin@brown.edu🐛
* coleman_dowdle@brown.edu 🐛


## Database
Startup Analysis Dataset (https://www.kaggle.com/siddarthareddyt/startup-analysis-dataset)

## Technologies used
SQL, Python, Pandas, Jupyter lab, Heroku
