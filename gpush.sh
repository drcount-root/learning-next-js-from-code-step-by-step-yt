#!/bin/bash

git add .

while true; do
    # Take message
    read -p "Add Commit message: " message

    # Check if message is empty
    if [[ -z "$message" ]]; then
        echo "Message cannot be empty. Please enter some message."
    else
        git commit -m "$message"
        git push -u origin main
        break
    fi
done

echo "OK! ✅"

colors=("31" "32" "33" "34" "35")  # Different colors for each line (red, green, yellow, blue, purple)

for i in 5 4 3 2 1; do
    echo -e "\e[${colors[$i-1]}mExiting in $i seconds...\e[0m"
    sleep 1
done


###################### OLD SCRIPT ######################

# #!/bin/bash

# git add .

# while true; do
#     # Take message
#     read -p "Add Commit message: " message

#     # Check if message is empty
#     if [[ -z "$message" ]]; then
#         echo "Message cannot be empty. Please enter some message."
#     else
#         git commit -m "$message"
#         git push -u origin main
#         break
#     fi
# done

# echo "OK! ✅"

# for i in 5 4 3 2 1; do
#     echo "Exiting in $i seconds..."
#     sleep 1
# done