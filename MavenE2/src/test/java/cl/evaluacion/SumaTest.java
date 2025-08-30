package cl.evaluacion;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class SumaTest {
    int sumar(int a, int b) { return a + b; }

    @Test
    void suma_dos_numeros() {
        assertEquals(7, sumar(3, 4));
    }
}
