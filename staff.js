const const query = (sql, params) => new Promise((resolve, reject) => mysqli.query(sql, params, (err, result) => err ? reject(err) : resolve(result)));

class Communities{
  
  async staff(userid, callback){
    const online = await query('SELECT communityid FROM users WHERE id=?', [userid]);
    const community = await query('SELECT host, cohosts, managers, moderators FROM communities WHERE id=?', [online[0].communityid]);

    if(community[0]){
      const host = await query('SELECT name FROM users WHERE id=?', [community[0].host]);
      const cohosts = await community[0].cohosts.split('-').map(Number);
      const managers = await community[0].managers.split('-').map(Number);
      const moderators = await community[0].moderators.split('-').map(Number);

      const hostarr = {
        id: community[0].host,
        name: host[0].name,
        rank: 'host'
      };
      const cohostsarr = [];
      const managersarr = [];
      const moderatorsarr = [];
      const membersarr = [];

      await Promise.all(cohosts.map(async (cohost) => {
        const user = await query('SELECT name FROM users WHERE id=?', [cohost]);

        if(cohost != 0){
          await cohostsarr.push({
            id: cohost,
            name: user[0].name,
            rank: 'cohost'
          });
        }

      }));

      await Promise.all(managers.map(async (manager) => {
        const user = await query('SELECT name FROM users WHERE id=?', [manager]);

        if(manager != 0){
          await managersarr.push({
            id: manager,
            name: user[0].name,
            rank: 'manager'
          });
        }

      }));

      await Promise.all(moderators.map(async (moderator) => {
        const user = await query('SELECT name FROM users WHERE id=?', [moderator]);

        if(moderator != 0){
          await moderatorsarr.push({
            id: moderator,
            name: user[0].name,
            rank: 'moderator'
          });
        }

      }));

      callback({
        status: 200,
        users: {
          host: hostarr,
          cohosts: cohostsarr.sort((a, b) => a.name < b.name ? -1 : 1),
          managers: managersarr.sort((a, b) => a.name < b.name ? -1 : 1),
          moderators: moderatorsarr.sort((a, b) => a.name < b.name ? -1 : 1),
          members: membersarr.sort((a, b) => a.name < b.name ? -1 : 1)
        }
      });
    }

    else{
      callback({
        status: 404,
        error: 'Community with this id doesn\'t exist.'
      });
    }

  }
  
}
