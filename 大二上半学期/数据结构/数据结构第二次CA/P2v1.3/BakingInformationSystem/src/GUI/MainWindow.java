package GUI;

import BakingInformationSystem.BakingSystem;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import  saveAndLoad.*;

public class MainWindow extends JFrame {
    JFrame frameMain= new JFrame("Baking Information System");
    JPanel panelButton=new JPanel();
    JPanel panelShow=new JPanel();
    public MainWindow(){

      frameMain.setBounds(200,200,700,500);

      //设置布局panelShow
        panelShow.setBounds(0,50,700,400);
        CardLayout cardLayout=new CardLayout();
        panelShow.setLayout(cardLayout);





      //设置布局panelButton
      panelButton.setBounds(0,0,700,50);
      panelButton.setVisible(true);
     // panelButton.setBackground(Color.cyan);
      panelButton.setLayout(new FlowLayout(FlowLayout.LEFT));

      //将控件添加到panelButton中

        //第一个按钮用来显示panelBaking
      JButton buttonBaking=new JButton("Baking");
      buttonBaking.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                PanelBaking panelBaking=new PanelBaking();
                panelShow.add(panelBaking,"panelBaking");
                cardLayout.show(panelShow,"panelBaking");
            }
        });

      //第二个按钮用来显示panelIngredient

        JButton buttonIngredient=new JButton("Ingredient");
        buttonIngredient.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                PanelIngredient panelIngredient=new PanelIngredient();
                panelShow.add(panelIngredient,"panelIngredient");
                cardLayout.show(panelShow,"panelIngredient");
            }
        });
        //第三个按钮用来显示panelRecipes
        JButton buttonRecipes=new JButton("Recipes");
        buttonRecipes.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                PanelRecipes panelRecipes=new PanelRecipes();
                panelShow.add(panelRecipes,"panelRecipes");
                cardLayout.last(panelShow);
            }
        });

        panelButton.add(buttonBaking);
        panelButton.add(buttonIngredient);
        panelButton.add(buttonRecipes);


        //第四个按钮实现addBakedGood方法
        JButton addBakedGood=new JButton("add BakedGood");
        addBakedGood.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                addBakedGood addBakedGood1=new addBakedGood();
                panelShow.add(addBakedGood1,"addBakedGood1");
                cardLayout.show(panelShow,"addBakedGood1");
            }
        });

       //第五个按钮实现addIngredient方法
        JButton addIngredient=new JButton("add Ingredient");
        addIngredient.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                addIngredient addIngredient1=new addIngredient();
                panelShow.add(addIngredient1,"addIngredient1");
                cardLayout.show(panelShow,"addIngredient1");
            }
        });

        //第六个方法实现addRecipes方法
        JButton addRecipes=new JButton("add Recipes");
        addRecipes.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                addRecipe addRecipe1=new addRecipe();
                panelShow.add(addRecipe1,"addRecipe1");
                cardLayout.show(panelShow,"addRecipe1");
            }
        });

        //第七个按钮实现save方法
        JButton save=new JButton("save");
        save.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                saveAndLoad.save.saveSystemData();
            }
        });

        //第八个按钮实现load功能
        JButton load=new JButton("load");
        load.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                saveAndLoad.load.loadSystemData();
            }
        });

        //第九个按钮，实现search功能
        JButton search=new JButton("search");
        search.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                searchMain search1=new searchMain();
                panelShow.add(search1,"search1");
                cardLayout.show(panelShow,"search1");
            }
        });
        //设置add方法，save方法和load方法的控件panel
        JPanel panelControl=new JPanel();
        panelControl.setBounds(0,450,700,50);
        panelControl.setLayout(new FlowLayout(FlowLayout.LEFT));


        panelControl.add(addBakedGood);
        panelControl.add(addIngredient);
        panelControl.add(addRecipes);
        panelControl.add(save);
        panelControl.add(load);
        panelButton.add(search);






      frameMain.add(panelButton,BorderLayout.NORTH);
      frameMain.setVisible(true);
      frameMain.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
      frameMain.add(panelShow,BorderLayout.CENTER);
      frameMain.add(panelControl,BorderLayout.SOUTH);
  }


}
