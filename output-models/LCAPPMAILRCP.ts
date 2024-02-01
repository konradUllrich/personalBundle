import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPMAILRCPAttributes {
    STRGUID: string;
    STRTYPE: string;
    BASKUSER: number;
    BLIST: number;
    BFIELD: number;
    BBOSS: number;
    BSUBSTITUTE: number;
    BDATARANGELIST?: number;
    BSEPARATEMAIL?: number;
    STRDGGUID?: string;
    STRFIELDGUID?: string;
    STREMAILFIELDMODE?: string;
    STRDRDGGUID?: string;
    STRDRFIELDGUID?: string;
    STRDRFILTERGUID?: string;
    TXTRCPLIST?: string;
}

@Table({
	tableName: "LCAPPMAILRCP",
	timestamps: false 
})
export class LCAPPMAILRCP extends Model<LCAPPMAILRCPAttributes, LCAPPMAILRCPAttributes> implements LCAPPMAILRCPAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(10) 
    })
    	STRTYPE!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BASKUSER!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	BLIST!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	BFIELD!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	BBOSS!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	BSUBSTITUTE!: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	BDATARANGELIST?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	BSEPARATEMAIL?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRDGGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRFIELDGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STREMAILFIELDMODE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRDRDGGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRDRFIELDGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRDRFILTERGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTRCPLIST?: string;

}