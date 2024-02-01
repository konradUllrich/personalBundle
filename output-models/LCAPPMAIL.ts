import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPMAILAttributes {
    STRGUID: string;
    STRAPPGUID: string;
    STRLINKGUID: string;
    STRFORMAT: string;
    STRSUBJECT?: string;
    STRSENDERTYPE: string;
    STRFROM?: string;
    LSUBJECTMODE?: number;
    STRDGGUID?: string;
    STRFIELDGUID?: string;
    STRFROMFIELDGUID?: string;
}

@Table({
	tableName: "LCAPPMAIL",
	timestamps: false 
})
export class LCAPPMAIL extends Model<LCAPPMAILAttributes, LCAPPMAILAttributes> implements LCAPPMAILAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRLINKGUID!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRFORMAT!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRSUBJECT?: string;

    @Column({
    	type: DataType.STRING(32) 
    })
    	STRSENDERTYPE!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRFROM?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LSUBJECTMODE?: number;

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
    	type: DataType.STRING(40) 
    })
    	STRFROMFIELDGUID?: string;

}