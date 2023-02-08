from django.shortcuts import render
import requests

# Create your views here.

# home route is making an api call to wikipedia to pull an antigen system
# How would I get the search term from my front end? Perhaps wait until react
def home(request):
    url = 'https://en.wikipedia.org/w/api.php'
    search = 'Duffy_antigen_system'

    # params to get the first 2 sentences with a wiki article
    params = f'?action=query&prop=extracts&titles={search}&format=json&exsentences=2&explaintext=1&formatversion=2'
    response = requests.get(url + params)

    # break down the json
    if response.status_code == 200:
        data = response.json()
        search_text = data['query']['pages'][0]
    else:
        print('bad api call')

    return render(request, 'dilution/base.html', {'data': search_text})
