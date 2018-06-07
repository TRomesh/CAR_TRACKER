#include "Settings.h"
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SettingsClass Settings;
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
void onLoraReceive(int packetSize)
{
  if(packetSize < 1)
    return;

  // тут разбор пришедшего пакета
  // read packet
  for (int i = 0; i < packetSize; i++) 
  {
    Serial.print((char)LoRa.read());
  }
}
*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SettingsClass::SettingsClass()
{
  
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
void SettingsClass::begin()
{
  RTCClock.begin(RTC_I2C);
  pinMode(LED_PIN, OUTPUT);

 // LoRa.onReceive(onLoraReceive);  
  LoRa.setPins(LORA_CS_PIN, LORA_RESET_PIN, LORA_IRQ_PIN);// set CS, reset, IRQ pin
  DBGLN("Init LoRa...");

  if (!LoRa.begin(LORA_FREQ)) // initialize ratio at 868 MHz
  {
    DBGLN("Starting LoRa failed!");
    while (1);
  }
  else
  {
      DBGLN("Starting LoRa successfully!");
  }
  
  //LoRa.receive(); // переключаемся на приём
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
