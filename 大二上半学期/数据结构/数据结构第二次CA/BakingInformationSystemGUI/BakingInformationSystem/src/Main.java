import DataStructure.*;
import BakingInformationSystem.*;
import saveAndLoad.*;
import java.util.Random;
import GUI.*;

public class Main {
    public static void main(String[] args) {
        load.loadSystemData();
        String projectDir = System.getProperty("user.dir");
       new MainWindow();
       save.saveSystemData();

    }
}