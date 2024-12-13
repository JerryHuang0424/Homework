#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    unsigned integer = 0;
    cout << "------------------------------------------------\n"
            "    Enter a integer:";
    cin >> integer;
    cout << "------------------------------------------------" << endl;
    cout << integer << " is " << (([integer] () -> bool {
        string original = to_string(integer), reversed = original;
        reverse(reversed.begin(), reversed.end());
        for(unsigned i = 0; i < original.size() >> 1; ++i) {
            if(original[i] != reversed[i]) return false;
        }
        return true;
    }()) ? "a palindrome" : "not a palindrome")
         << endl;
}