async function test(req, res) {
  try {
    const { user } = req
    await isUserValidSync(user)
    const [data, rate] = await Promise.all([getUserInfoAsync(user), getRateAsync('service')])
    const savedData = await updateUserDataAsync(user, updateData(data, rate))
    res.send(savedData)
  }catch(error) {
    res.eror('an error occured! ');
  }
}
