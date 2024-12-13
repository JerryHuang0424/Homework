#include <iostream>

using namespace std;

enum PlayerType : short {
    Default = 0, PlayerX = 1, PlayerO = 2
};

int main() {
    short grid[3][3] = {0};
    bool isPlayerX = true;
    int r, c, count = 0;
    auto at = [&grid](int r, int c) -> char {
        switch (static_cast<PlayerType>(grid[r][c])) {
            case PlayerX:
                return 'X';
            case PlayerO:
                return 'O';
            case Default:
                return ' ';
        }
    };
    do {
        do {
            cout << "Enter a row (0, 1, or 2) for player " << (isPlayerX ? "X" : "O") << ": ";
            cin >> r;
            cout << "Enter a column (0, 1, or 2) for player " << (isPlayerX ? "X" : "O") << ": ";
            cin >> c;
        } while([&]() mutable -> bool {
            if(r > 2 || r < 0 || c > 2 || c < 0) {
                cout << "Invalid cell!" << endl;
                return true;
            }
            if(grid[r][c] != Default) {
                cout << "The cell has already been occupied!" << endl;
                return true;
            }
            grid[r][c] = isPlayerX ? PlayerX : PlayerO;
            ++count;
            return false;
        }());
        isPlayerX = !isPlayerX;
    } while([&]() -> bool {
        cout << "-------------" << endl
             << "| " << at(0, 0) << " | " << at(0, 1) << " | " << at(0, 2) << " |" << endl
             << "-------------" << endl
             << "| " << at(1, 0) << " | " << at(1, 1) << " | " << at(1, 2) << " |" << endl
             << "-------------" << endl
             << "| " << at(2, 0) << " | " << at(2, 1) << " | " << at(2, 2) << " |" << endl
             << "-------------" << endl;
        // Check if there is a row with 3 checked
        for(int i = 0; i < 3; ++i) {
            if(grid[i][0] != Default && grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]) {
                cout << (grid[i][0] == PlayerX ? 'X' : 'O') << " player won" << endl;
                return false;
            }
        }
        // columns as well
        for(int i = 0; i < 3; ++i) {
            if(grid[0][i] != Default && grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]) {
                cout << (grid[0][i] == PlayerX ? 'X' : 'O') << " player won" << endl;
                return false;
            }
        }
        // And the diagonals
        if(grid[1][1] != Default && grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
            cout << (grid[1][1] == PlayerX ? 'X' : 'O') << " player won" << endl;
            return false;
        }
        if(grid[1][1] != Default && grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]) {
            cout << (grid[1][1] == PlayerX ? 'X' : 'O') << " player won" << endl;
            return false;
        }
        if(count == 9) {
            cout << "Draw game" << endl;
            return false;
        }
        return true;
    }());
}