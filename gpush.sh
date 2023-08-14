#!/bin/bash

# ANSI escape codes for colors
RED="\033[0;31m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
CYAN="\033[0;36m"
RESET="\033[0m"  # Reset color

# Function to print colored text
print_colored() {
    local color="$1"
    shift
    echo -e "${color}$@${RESET}"
}

# Function to prompt for input and check if empty
get_non_empty_input() {
    local prompt="$1"
    local input
    while true; do
        read -p "$(print_colored ${GREEN}${prompt}${RESET}) " input
        if [[ -z "$input" ]]; then
            print_colored ${RED}"Message cannot be empty. Please enter some message."${RESET}
        else
            echo "$input"
            break
        fi
    done
}

git add .

message=$(get_non_empty_input "Add Commit message:")

git commit -m "$message"
git push -u origin main

print_colored ${CYAN}"OK! ✅"${RESET}

for i in 5 4 3 2 1; do
    print_colored ${YELLOW}"Exiting in $i seconds..."${RESET}
    sleep 1
done


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