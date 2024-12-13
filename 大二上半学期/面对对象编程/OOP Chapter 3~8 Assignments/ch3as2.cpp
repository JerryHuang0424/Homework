#include <iostream>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    unsigned integer = 0;
    do {
        cout << "------------------------------------------------\n"
            "    Enter a three-digit integer:";
        cin >> integer;
        cout << "------------------------------------------------" << endl;
    }
    while (integer < 100 || integer > 999);
    cout << integer << " is " << (([integer] () -> bool {
        return (integer / 100) == (integer % 10);
    }()) ? "a palindrome" : "not a palindrome")
    << endl;
}