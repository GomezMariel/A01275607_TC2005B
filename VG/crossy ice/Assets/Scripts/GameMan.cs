using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameMan : MonoBehaviour
{
    [SerializeField] private GameObject gameOverText;
    
    public static GameMan Instance {get; private set; }
    private void Awake(){
        if(Instance != null && Instance != this){
            Destroy(this);
        }
        else {
            Instance = this;
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void ShowGameOverScreen(){
        gameOverText.SetActive(true);
    }

}
