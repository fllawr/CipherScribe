import string
import random

def generate_key():
    key = list(string.ascii_lowercase)
    random.shuffle(key)
    return ''.join(key)

def encrypt(text, key):
    encrypted_text = ''
    for char in text:
        if char.isalpha():
            index = ord(char.lower()) - ord('a')
            encrypted_text += key[index]
        else:
            encrypted_text += char
    return encrypted_text

def decrypt(text, key):
    decrypted_text = ''
    for char in text:
        if char.isalpha():
            index = key.index(char.lower())
            decrypted_text += chr(index + ord('a'))
        else:
            decrypted_text += char
    return decrypted_text

message = "Hello, World!"
key = generate_key()
encrypted_message = encrypt(message, key)
print("Original Message:", message)
print("Encrypted Message:", encrypted_message)
print("Decrypted Message:", decrypt(encrypted_message, key))
