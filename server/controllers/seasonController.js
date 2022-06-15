
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

module.exports.Generate = catchAsync(async (req, res, next) => {

    const teams = req.body.teams


    const roundRobin = (teams) => {
        let schedule = []
        let league = teams.slice()

        if (league.length % 2) {
            league.push('None')
        }

        let rounds = league.length

        for (let j = 0; j < (rounds - 1) * 2; j++) {
            schedule[j] = []
            for (let i = 0; i < rounds / 2; i++) {
                if (league[i] !== 'None' && league[rounds - 1 - i] !== 'None') {
                    if (j % 2 == 1) {
                        schedule[j].push([league[i], league[rounds - 1 - i]])
                    } else {
                        schedule[j].push([league[rounds - 1 - i], league[i]])
                    }
                }
            }
            league.splice(1, 0, league.pop())
        }
        return schedule
    }

    let leagueSchedule = roundRobin(teams)

    for (let p = 0; p < leagueSchedule.length; p++) {
        console.log(leagueSchedule[p])
    }


    res.send(teams)
    // const { password, name, lastName, phone, address, role } = req.body;
    // console.log(req.file, req);
    // const image = req.file?.path;

    // if (!password || !name || !lastName)
    //   return next(new AppError('Fields: password, name, lastName are required!'));

    // const user = await User.findOne({ _id: req.params.id }).select('+password');
    // if (!user) return next(new AppError('User with this email does not exist!'));
    // if (user.activation_hash)
    //   return next(new AppError('You are already registrered!'));

    // user.activation_hash = true;
    // user.name = name;
    // user.lastName = lastName;
    // user.password = password;
    // user.phone = phone;
    // user.address = address;
    // user.role = role;
    // user.image = image;

    // await user.save();

    // res.status(201).json({ status: 'success', data: { user } });
});