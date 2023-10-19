import spacy
from flask import Flask, request, jsonify
from flask_cors import CORS

nlp_ner = spacy.load("model-last")  # Adjust the path to your model

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/ner_predict', methods=['POST'])
def ner_predict():
    data = request.get_json(force=True)
    text = data['text']
    doc = nlp_ner(text)
    entities = [{'text': ent.text, 'label': ent.label_} for ent in doc.ents]

    # Calculate the count of "DOWN SYNDROME" entities
    down_syndrome_count = sum(1 for entity in entities if entity['label'] == 'DOWN SYNDROME')
    
     # Calculate the diagnosis percentage
    diagnosis_percentage = down_syndrome_count * 10  # 10% per entity

    # Prepare the diagnosis result
    diagnosis_result = {
        'isDownSyndromeDetected': down_syndrome_count >= 3,
        'totalPercentage': diagnosis_percentage,
        'textUsedForDiagnosis': [entity['text'] for entity in entities],
    }
    
    print(f"{diagnosis_result}")
    return jsonify(diagnosis_result)



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)



# import spacy
# from flask import Flask, request, jsonify
# from flask_cors import CORS

# nlp_ner = spacy.load("model-last")  # Adjust the path to your model

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# @app.route('/ner_predict', methods=['POST'])
# def ner_predict():
#     data = request.get_json(force=True)
#     text = data['text']
#     doc = nlp_ner(text)
#     entities = [{'text': ent.text, 'label': ent.label_} for ent in doc.ents]
#     return jsonify(entities)

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000)



# import spacy
# from flask import Flask, request, jsonify

# nlp_ner = spacy.load("model-last")  # Adjust the path to your model

# app = Flask(__name__)

# @app.route('/ner_predict', methods=['POST'])
# def ner_predict():
#     data = request.get_json(force=True)
#     text = data['text']
#     doc = nlp_ner(text)
#     entities = [{'text': ent.text, 'label': ent.label_} for ent in doc.ents]
#     return jsonify(entities)

# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=5000)

# # import requests

# # url = 'http://127.0.0.1:5000/ner_predict'
# # data = {'text': 'Your input text here.'}
# # response = requests.post(url, json=data)

# # if response.status_code == 200:
# #     print('NER Predictions:', response.json())
# # else:
# #     print('Error:', response.status_code)
