import DataStructure.*;
import BakingInformationSystem.*;
import saveAndLoad.*;
import java.util.Random;
import GUI.*;

public class Main {
    public static void main(String[] args) {
        load.loadSystemData();
        System.out.println(BakingSystem.searchBakedGood("蒙德","origin"));
       new MainWindow();


    }
}