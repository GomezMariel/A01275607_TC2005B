using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BellMotion : MonoBehaviour
{
    [SerializeField] float angleLimit;
    [SerializeField] float speed;

    float angle;
    int direction = 1;
    float t = 0.5f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        angle = Mathf.Lerp(-angleLimit, angleLimit, t);

        t += direction * speed * Time.deltaTime;

        if(t > 1 || t < 0){
            direction *= 
        }
        
    }
}
