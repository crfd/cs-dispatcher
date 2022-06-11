import GPSCoordinate from './GPSCoordinate'
import Reference from './Reference'
import UUID from './UUID'

// TODO: Include more information, like what kind of value exceeded the threshold
enum SensorEventType {
  /** To manually trigger an emergency. */
  DeclareEmergency,

  /** A high acceleration was detected. This might indicate a collision or a fall. */
  HighAcceleration,

  /** The device detected a abnoramly high heart rate. */
  HighHearthRate,

  /** The device detected an abnoramly low heart rate. */
  LowHeartRate,

  /** Some other sensor exceeded a threshold. */
  MeasurementExceeded
}

type SensorEvent = {
  /** The type of the sensor event. */
  type: SensorEventType

  /** An optional value associated with the sensor event. */
  value?: number

  /** A human readable description of the event. */
  description?: string
}

type CapturePoint = {
  /** A unique identifier for the capture point. */
  id: UUID

  /** The timestamp at which the capture point was created. */
  createdAt: Date

  /** Defines wether the capture point is considered a test */
  isTest: boolean

  /** The device that created the capture point. */
  device: Reference

  /**
   * In case the device posses a GPS sensor the coordinates at which the device
   * was can be stored.
   */
  location?: GPSCoordinate

  /** The battery level of the device at the time the capture point was created. */
  batteryLevel?: number

  /**
   * The signal strength of the device between `0` and `1`. In case the value is
   * `0` the device was offline at that time.
   */
  signalStrength?: number

  /**
   * Any extrem event that has been detected by the device. In case the event is
   * of type DeclareEmergency an emergency will be automatically triggered. All
   * other kind of events might indicate an emergency and notify the disptacher
   * that he might need to check on the health of the workers
   */
  events?: SensorEvent[]
}

export default CapturePoint
