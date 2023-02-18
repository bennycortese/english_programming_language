# Python program to translate
# speech to text and text to speech


import speech_recognition as sr
import pyttsx3
import os
import openai


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
def main():
    #print(os.getenv("OPENAI_API_KEY"))
    openai.api_key = ''
    speechWatch = True
    while (speechWatch):
        try:
            with sr.Microphone() as source2:
                r.adjust_for_ambient_noise(source2, duration=0.2)
                audio2 = r.listen(source2)
                MyText = r.recognize_google(audio2)
                MyText = MyText.lower()
                MyText = """\n\n\n""" + MyText + """\n\n\n"""
                completion = openai.Completion.create(engine="code-davinci-002", prompt=MyText, temperature = 0, max_tokens = 256, top_p = 1, frequency_penalty = 0, presence_penalty=0)
                print()
                #response = openai.Completion.create(
                #    model="code-davinci-002",
                #    prompt="\"\"\"\nWrite a program that outputs the fizz buzz of numbers between 1 and 50\n\"\"\"",
                #    temperature=0,
                #    max_tokens=256,
                #    top_p=1,
                #    frequency_penalty=0,
                #    presence_penalty=0
                #)
                print(completion.choices[0].text)
        except sr.RequestError as e:
            print("Could not request results; {0}".format(e))
        except sr.UnknownValueError:
            print("unknown error occurred")


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    main()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
