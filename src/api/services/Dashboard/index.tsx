import * as getEquipaments from './GetEquipaments'
import * as deleteEquipament from './DeleteEquipament'
import * as getEquipamentByField from './GetEquipamentByField'
import * as createEquipament from './CreateEquipament'
import * as getEquipamentById from './GetEquipamentById '

export const ServicesDashboard = {
    ...getEquipaments,
    ...deleteEquipament,
    ...createEquipament,
    ...getEquipamentByField,
    ...getEquipamentById
}