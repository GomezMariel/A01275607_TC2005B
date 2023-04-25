/*
Eliminate prefabs
Mariel Gómez Gutiérrez
A01275607
*/

using UnityEngine;

public class Distroyer : MonoBehaviour
{
    void OnCollisionEnter2D(Collision2D col) //Funciones con mayus y variables minusculas
    {
        Destroy(col.gameObject);
    }

    void OnTriggerEnter2D(Collider2D col)
    {
        
    }

}
