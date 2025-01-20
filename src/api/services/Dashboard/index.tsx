import * as getEquipaments from './GetEquipaments'
import * as deleteEquipament from './DeleteEquipament'

export const ServicesDashboard = {
    ...getEquipaments,
    ...deleteEquipament
}