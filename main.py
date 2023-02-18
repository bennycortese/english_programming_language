# Python program to translate
# speech to text and text to speech


import speech_recognition as sr
import pyttsx3
import os
import openai
import modal
stub = modal.Stub(image=modal.Image.debian_slim().pip_install("openai"))


# Initialize the recognizer
r = sr.Recognizer()


# Function to convert text to
# speech
def SpeakText(command):
    # Initialize the engine
    engine = pyttsx3.init()
    engine.say(command)
    engine.runAndWait()


# Loop infinitely for user to
# speak


@stub.function(secret=modal.Secret.from_name("my-openai-secret"))
def complete_text(prompt):

    completion = openai.Completion.create(
  model="code-davinci-002",
  prompt=prompt,
  temperature=0.75,
  max_tokens=256,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0
)
    return completion.choices[0].text

# Press the green button in the gutter to run the script.
@stub.local_entrypoint
def main():
    #print(os.getenv("OPENAI_API_KEY"))
    speechWatch = True
    while (speechWatch):
        list = []
        try:
            with sr.Microphone() as source2:
                r.adjust_for_ambient_noise(source2, duration=0.2)
                audio2 = r.listen(source2)
                MyText = r.recognize_google(audio2)
                MyText = MyText.lower()
                MyText = """\n\n\n""" + MyText + """\n\n\n"""
                for i in range(3):
                    list.append(complete_text.call(MyText))
        except sr.RequestError as e:
            print("Could not request results; {0}".format(e))
        except sr.UnknownValueError:
            print("unknown error occurred")

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
