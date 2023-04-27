/*
    Script to randomly generate, and delete snowballs
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SnowballGenerator : MonoBehaviour
{
    public float originX;
    public float endX;
    public GameObject snowball;
    public float generationInterval;

    float randomGenerationInterval;
    List<GameObject> snowballs = new List<GameObject>();
    // Start is called before the first frame update
    void Start()
    {
        randomGenerationInterval = Random.Range(1f, generationInterval);
    }

    // Update is called once per frame
    void Update()
    {
        randomGenerationInterval -= Time.deltaTime;

        if (randomGenerationInterval < 0) {
            GameObject newSnowBall = Instantiate(snowball, new Vector3(originX, transform.position.y, 0),  Quaternion.identity);

            SnowballMovement script = newSnowBall.GetComponent<SnowballMovement>();

            if (originX < endX) {
                script.direction = new Vector3(1, 0, 0);
            } else {
                script.direction = new Vector3(-1, 0, 0);
            }

            snowballs.Add(newSnowBall);

            randomGenerationInterval = Random.Range(1f, generationInterval);
        }



        for (int i = snowballs.Count - 1; i >= 0; i--) {
            GameObject snowball = snowballs[i];
            if (snowball == null) { // check if snowball is null
                snowballs.RemoveAt(i);
                continue;
            }
            if (originX < endX) { // from left to right
                if (snowball.transform.position.x > endX) {
                    snowballs.RemoveAt(i);
                    Destroy(snowball);
                }
            } else { // from right to left
                if (snowball.transform.position.x < endX) {
                    snowballs.RemoveAt(i);
                    Destroy(snowball);
                }
            }
        }
    }
}
