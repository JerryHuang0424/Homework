package GUI;

import BakingInformationSystem.BakingSystem;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Scanner;

public class PanelRecipes extends JPanel {
    JPanel panelRecipes=new JPanel();
    public PanelRecipes(){
        panelRecipes.setBounds(0,50,700,400);
        panelRecipes.setVisible(true);


        //设置recipesShow的panel
        int size;
        JPanel recipesShow=new JPanel();
        Scanner sc=new Scanner(System.in);

        size= BakingSystem.recipeList.size();


        if(size==0){
            JDialog dialog=new JDialog();
            dialog.setLayout(new FlowLayout(FlowLayout.LEADING));
            dialog.add(new JLabel("please add a recipe"));
            dialog.setVisible(true);
            JButton ok=new JButton("ok");
            ok.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    dialog.dispose();
                }
            });

        }
        int rows;
        if(size/4==0){
            rows=size/4;
        }else{
            rows=size/4+1;
        }
        recipesShow.setLayout(new GridLayout(rows,4,5,5));
        for(int i=0;i<size;i++){
            String name=BakingSystem.recipeList.getDataByIndex(i).getBakedGood().getName();
            recipesShow.add(new JButton(name));

        }

        //新设置一个JScrollPane，将bakingShow添加到里面
        JScrollPane scrollPane=new JScrollPane(recipesShow);
        scrollPane.setPreferredSize(new Dimension(700,350));

        //将JScrollPane添加到bakingPanel
        add(scrollPane,BorderLayout.CENTER);
    }
}
