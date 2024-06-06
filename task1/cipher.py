def encrypt(text, s):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isupper():
            result += chr((ord(char) + s - 65) % 26 + 65)
        else:
            result += chr((ord(char) + s - 97) % 26 + 97)
    return result

def decrypt(text, s):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if char.isupper():
            result += chr((ord(char) - s - 65 + 26) % 26 + 65)
        else:
            result += chr((ord(char) - s - 97 + 26) % 26 + 97)
    return result

text = input("Enter the text to be encrypted: ")
s = int(input("Enter the number of shifts: "))
encrypted_text = encrypt(text, s)
print("Cipher: " + encrypted_text)
decrypted_text = decrypt(encrypted_text, s)
print("Decrypted: " + decrypted_text)
