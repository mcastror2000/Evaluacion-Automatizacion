package cl.evaluacion;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class RestaTest {
    int restar(int a, int b) { return a - b; }

    @Test
    void resta_dos_numeros() {
        assertEquals(1, restar(5, 4));
    }
}
