import * as getEquipaments from './GetEquipaments'
import * as deleteEquipament from './DeleteEquipament'
import * as getEquipamentByField from './GetEquipamentByField'

export const ServicesDashboard = {
    ...getEquipaments,
    ...deleteEquipament,
    ...getEquipamentByField
}