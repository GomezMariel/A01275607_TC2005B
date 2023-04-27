using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SineMovement : MonoBehaviour
{
    [SerializeField] float amplitude;
    [SerializeField] float speed;

    float angle;
    Vector3 origin;
    

    // Start is called before the first frame update
    void Start()
    {
        origin = transform.position;
    }

    // Update is called once per frame
    void Update()
    {
        transform.position = origin + new Vector3(Mathf.Sin(angle) * amplitude, 0, 0);
        angle += speed * Time.deltaTime;
    }
}
