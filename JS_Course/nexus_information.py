import requests

from_port = '172.16.4.19:8081'
from_user = 'admin'
from_pass = 'Ideyalabs@426'
from_url = 'http://172.16.4.19:8081/'
from__repo = 'http://172.16.4.19:8081/repository/ibaas-release/'

re = requests.get(from__repo)
print("RESPONSE : ", re.text)

