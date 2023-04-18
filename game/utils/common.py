
import json

def getId(request):
    id = request.query_params.get('id')
    if not id:
       body = json.loads(request.body)
       id = body.get('id')
    return id or -1
    