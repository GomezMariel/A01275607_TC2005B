/*
    Script that controlls the movement of a snowball
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SnowballMovement : MonoBehaviour
{
    public float speed;
    public Vector3 direction;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(direction * speed * Time.deltaTime);
    }
}
