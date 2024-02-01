import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPDATAPICKAttributes {
    STRGUID: string;
    STRAPPFUPGUID: string;
    STRAPPFILTERGUID?: string;
    STRCONTROLNAME?: string;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPDATAPICK",
	timestamps: false 
})
export class LCAPPDATAPICK extends Model<LCAPPDATAPICKAttributes, LCAPPDATAPICKAttributes> implements LCAPPDATAPICKAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPFUPGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPFILTERGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTROLNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}