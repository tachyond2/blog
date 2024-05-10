# acess authentication

digital proof you are who you claim to be

# Authenticators from

PIN, passcode, biometric, or device password,
face, fingerprint, PIN, or device password

# key challenge creation step

1.find public key located in $HOME/.ssh/authorized_key

# key response generation

![alt text](<resources/SSH 代理转发图解指南 --- An Illustrated Guide to SSH Agent Forwarding.png>)

# compare hd5 hash match

$HOME/.ssh/known_hosts

1.checking for existing key
ls -al ~/.ssh
Or generate a new ssh key

2.Adding your SSH key to the ssh-agent
1.Start the ssh-agent in the background.
2.load keys into the ssh-agent and store passphrases in your keychain.
3.Add your SSH private key to the ssh-agent and store your passphrase in the keychain.
