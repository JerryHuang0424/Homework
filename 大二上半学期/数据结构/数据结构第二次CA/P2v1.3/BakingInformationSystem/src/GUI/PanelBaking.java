package GUI;

import BakingInformationSystem.BakedGood;
import BakingInformationSystem.BakingSystem;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Scanner;

public class PanelBaking extends JPanel {
    JPanel panelBaking=new JPanel();

    public PanelBaking() {
        //bakingPanel的基本设置
        panelBaking.setBounds(0, 0, 700, 400);
        panelBaking.setVisible(true);


        //设置bakingShow的panel

        JPanel bakingShow = new JPanel();
        bakingShow.setLayout(null);
        Scanner sc = new Scanner(System.in);

        int size;
        size = BakingSystem.bakedGoodLists.size();

        if(size==0){
            JDialog dialog=new JDialog();
            dialog.setLayout(new FlowLayout(FlowLayout.LEADING));
            dialog.add(new JLabel("please add a Baked Good"));
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
        if (size / 4 == 0) {
            rows = size / 4;
        } else {
            rows = size / 4 + 1;
        }
        bakingShow.setLayout(new GridLayout(rows, 4,5,5));
        for (int i = 0; i < size; i++) {
            String name=BakingSystem.bakedGoodLists.getDataByIndex(i).getName();
            String origin=BakingSystem.bakedGoodLists.getDataByIndex(i).getOrigin();
            String description=BakingSystem.bakedGoodLists.getDataByIndex(i).getDescription();
            String url=BakingSystem.bakedGoodLists.getDataByIndex(i).getImageUrl();
            JButton jButton=new JButton(name);
            jButton.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    BakedDialog bakedDialog=new BakedDialog(name,origin,description,url);
                }
            });
            bakingShow.add(jButton);

        }

        //新设置一个JScrollPane，将bakingShow添加到里面
        JScrollPane scrollPane = new JScrollPane(bakingShow);
        scrollPane.setPreferredSize(new Dimension(700,350));

        //将JScrollPane添加到bakingPanel
        add(scrollPane, BorderLayout.CENTER);
    }
}
