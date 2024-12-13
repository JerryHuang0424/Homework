// THE FILE IS BASED ON THE ASSIGNMENT OF CHAPTER 3
#include <iostream>
#include <string>
#include <random>
#define matchByDigit(c1, c2, c3) \
(entered[c1] == lottery[0] && \
entered[c2] == lottery[1] && \
entered[c3] == lottery[2])
#define oneDigitMatch(i) \
(entered[0] == lottery[i] || \
entered[1] == lottery[i] ||  \
entered[2] == lottery[i])

using namespace std;
// AT LEAST C++11 Standard IS REQUIRED
int main() {
    ios::sync_with_stdio(false);
    // Generate lottery
    default_random_engine engine;
    uniform_int_distribution<unsigned> randomInt(0, 999);
    string lottery = to_string(randomInt(engine)), entered;
    // If the three digits are not distinct, regenerate it
    while (lottery[0] == lottery[1] || lottery[1] == lottery[2] || lottery[0] == lottery[2])
        lottery = to_string(randomInt(engine));
    cout << "Enter the lottery you pick (three digits):";
    do cin >> entered; while(
            entered.size() != 3 || [entered]() -> bool {
                for(int i : {0, 1, 2}) {
                    if(!std::isdigit(entered[i])) {
                        cout << "The input is not a valid three-digit number! \n";
                        return true;
                    }
                }
                return false;
            }());
#ifdef DEBUG
    cout << "Lottery number: " << lottery << endl;
#endif
    if(entered == lottery) cout << "Exact match: you win $10,000\n";
    else if(matchByDigit(0, 2, 1) || matchByDigit(1, 0, 2) || matchByDigit(1, 2, 0) ||
            matchByDigit(2, 0, 1) || matchByDigit(2, 1, 0))
        cout << "Match all digits: you win $3,000\n";
    else if(oneDigitMatch(0) || oneDigitMatch(1) || oneDigitMatch(2))
        cout << "Match one digit: you win $1,000\n";
    else cout << "Sorry, no match\n";
}