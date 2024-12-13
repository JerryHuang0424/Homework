#include <iostream>
#include <fstream>
#include <vector>

using namespace std;

// student class

class Student {
private:
    string name;
    int score;

public:
    Student(string n, int s) : name(n), score(s) {}

    string getName() const {
        return name;
    }

    int getScore() const {
        return score;
    }

    void setScore(int newscore){
        score = newscore;
    }
};

// student manager class

class StudentManager {
private:
    vector<Student> students;
    string filename;

public:
    StudentManager(string file) : filename(file) {
        loadFromFile();
    }

    void addStudent(string name, int score) {
        Student newStudent(name, score);
        students.push_back(newStudent);
        saveToFile();
    }

    void removeStudent(string name) {
        for (auto it = students.begin(); it != students.end(); ++it) {
            if (it->getName() == name) {
                students.erase(it);
                break;
            }
        }
        saveToFile();
    }

    void displayStudents() {
        for (const auto& student : students) {
            cout << "Name: " << student.getName() << ", Score: " << student.getScore() << endl;
        }
    }

    void searchStudent(string name) {
        for (const auto& student : students) {
            if (student.getName() == name) {
                cout << "Name: " << student.getName() << ", Score: " << student.getScore() << endl;
                return;
            }
        }
        cout << "No information found " << endl;
    }

    void modifyStudent(string name, int newScore) {
        for (auto& student : students) {
            if (student.getName() == name) {
                student.setScore(newScore);
                saveToFile();
                cout << "modified successfully。" << endl;
                return;
            }
        }
        cout << "No information found, unable to modify" << endl;
    }

private:
    void loadFromFile() {
        ifstream file(filename);
        if (file.is_open()) {
            string name;
            int score;
            while (file >> name >> score) {
                Student student(name, score);
                students.push_back(student);
            }
            file.close();
        }
    }

    void saveToFile() {
        ofstream file(filename);
        if (file.is_open()) {
            for (const auto& student : students) {
                file << student.getName() << " " << student.getScore() << endl;
            }
            file.close();
        }
    }
};

//  MainMenu class

class MainMenu {
private:
    StudentManager manager;

public:
    MainMenu(string file) : manager(file) {}

    void showMenu() {
        int choice;
        string name;
        int score;

        while (true) {
            cout << "=== student information manage system ===" << endl;
            cout << "1. add student information and score" << endl;
            cout << "2. delete student information and score" << endl;
            cout << "3. display all the student information" << endl;
            
            cout << "4. search student information" << endl;
            cout << "5. modify student information" << endl;
            cout << "0. exit" << endl;
            cout << "please enter the choice：";
            cin >> choice;

            switch (choice) {
            case 1:
                cout << "please enter the student `s name：";
                cin >> name;
                cout << "please enter the student`s score：";
                cin >> score;
                manager.addStudent(name, score);
                break;
            case 2:
                cout << "Please enter the name of the student you want to delete：";
                cin >> name;
                manager.removeStudent(name);
                break;
            case 3:
                manager.displayStudents();
                break;
            case 0:
                return;
            case 4:
                cout << "Please enter the name of the student you want to search";
                cin >> name;
                manager.searchStudent(name);
                break;
            case 5:
                cout << "Please enter the name of the student you want to modify";
                cin >> name;
                cout << "Please enter the new score ";
                cin >> score;
                manager.modifyStudent(name, score);
                break;
            default:
                cout << "Invalid option, please re-enter!" << endl;
                break;
            }

            cout << endl;
        }
    }
};

int main() {
    MainMenu menu("students.txt");
    menu.showMenu();

    return 0;
}
