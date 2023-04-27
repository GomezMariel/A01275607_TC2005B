/*
    Script that controlls the movement of a snowball
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SnowballMovement : MonoBehaviour
{
    public Vector3 direction;

    float speed;
    // Start is called before the first frame update
    void Start()
    {
        speed = Random.Range(7f, 12f);
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(direction * speed * Time.deltaTime);
    }
}
