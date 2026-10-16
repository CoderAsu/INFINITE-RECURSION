// A namespace is a named scope that groups related identifiers together and helps prevent naming conflicts.

/*

Identifiers include:
- Variables
- Functions
- Classes
- Structures
- Enumerations
- Other namespaces

*/

#include <iostream>
using namespace std;

namespace DeveloperA{
    void display(){
        cout << "Developer A" << endl;
    }
}

namespace DeveloperB{
    void display(){
        cout << "Developer B" << endl;
    }
}

namespace Mathematics{
    int add(int a, int b){
        return a+b;
    }

    int add(int a, int b, int c){
        return a+b+c;
    }
}



// functions defined outside a namespace

namespace Welcome{
    void greet(void);
}

void Welcome::greet(){
    cout << "Hello World!" << endl;
}









// Nested Namespace

namespace Company{
    namespace Employee{
        void display(){
            cout << "Employee Information\n";
        }
    }
}

// or we can use modern c++ technique

namespace School::Student
{
    void display()
    {
        std::cout << "Student details\n";
    }
}







// Namespace Aliases

namespace Company::Department::Employee::Management
{
    void display()
    {
        std::cout << "Management Department\n";
    }
}

namespace Management = Company::Department::Employee::Management;








// Anonymous Namespaces
// An anonymous namespace is a namespace without a name. It is commonly used when a variable or function should be private to a particular source file.

namespace
{
    int value = 100;

    void display2()
    {
        std::cout << value << '\n';
    }
}









// Reopening a Namespace
// we can define the same namespace in multiple places.


namespace FavHero{
    void soloLeveling(){
        cout << "Jinwoo Sung 😊" << endl;
    }
}

namespace FavHero{
    void demonSlayer(){
        cout << "Tanjiro Kamado" << endl;
    }
}







// Inline Namespace

// An inline namespace is a namespace declared with the inline keyword that allows its members to be found through the enclosing namespace during name lookup.

namespace MyLibrary
{
    inline namespace V1
    {
        void display()
        {
            std::cout << "Version 1\n";
        }
    }
}


int main(){

    using namespace DeveloperA;

    display();
    DeveloperB::display();

    cout << endl;


    // Three ways to access namespace members


    // 1. using the scope resolution operator

    cout << Mathematics::add(5, 6, 7) << endl;



    // 2. use a "using" declaration

    using Mathematics::add;

    cout << add(5, 6) << endl;



    // 3. use a using namespace directive

    using namespace Mathematics;

    cout << add(45, 50, 45) << endl << endl;








    Welcome::greet();





    Company::Employee::display();


    School::Student::display();


    Management::display();



    // anonymous namespace
    display2();
    cout << endl;




    using namespace FavHero;

    soloLeveling();
    demonSlayer();
    cout << endl;







    // Inline namespace

    MyLibrary::display();
    MyLibrary::V1::display();


    return 0;
}