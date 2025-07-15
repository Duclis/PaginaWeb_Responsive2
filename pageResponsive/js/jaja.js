import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimpleAnimation extends JPanel implements ActionListener {

    private int x = 0;
    private int y = 0;
    private int deltaX = 2;
    private int deltaY = 2;

    public SimpleAnimation() {
        Timer timer = new Timer(10, this);
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.BLUE);
        g.fillOval(x, y, 50, 50);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        x += deltaX;
        y += deltaY;
        if (x < 0 || x > getWidth() - 50) {
            deltaX *= -1;
        }
        if (y < 0 || y > getHeight() - 50) {
            deltaY *= -1;
        }
        repaint();
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Simple Animation");
        SimpleAnimation animation = new SimpleAnimation();
        frame.add(animation);
        frame.setSize(400, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
