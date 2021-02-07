// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Get crate by ID
export async function getById(parentValue, { crateId }) {
  const crate = await models.Crate.findOne({ where: { id: crateId } })
  debugger;
  if (!crate) {
    // Crate does not exists
    throw new Error('The crate you are looking for does not exists or has been discontinued.')
  } else {
    return crate
  }
}

// Get all crates
export async function getAll(parentValue, { orderBy }) {
  debugger;
  return await models.Crate.findAll({ order: [['id', orderBy]] })
}

// Create crate
export async function create(parentValue, { name, description }, { auth }) {
  debugger;
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.create({
      name,
      description
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Update crate
export async function update(parentValue, { id, name, description }, { auth }) {
  debugger;
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.update(
      {
        name,
        description
      },
      {where: {id}}
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete crate
export async function remove(parentValue, { id }, { auth }) {
  debugger;
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.destroy({where: {id}})
  } else {
    throw new Error('Operation denied.')
  }
}
