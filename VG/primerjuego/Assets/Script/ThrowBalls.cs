/*
Create copies of a ball object to faal on the game scene
Mariel Gómez Gutiérrez
A01275607
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ThrowBalls : MonoBehaviour
{
    [SerializeField] GameObject ball; // se puede usar public o [SerializeField]
    [SerializeField] float limit;
    [SerializeField] float delay;
    

    // Start is called before the first frame update
    void Start()
    {
        //Llamar a una función cada cierto tiempo. 
        InvokeRepeating("CreateBall", delay, delay);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void CreateBall()
    {
        Vector3 newPos = new Vector3(Random.Range(-limit, limit), 7.1f, 0);
        //Create a copy of the ball prefab,
        Instantiate(ball, newPos, Quaternion.identity);
    }
}
