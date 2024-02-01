import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPINDEXAttributes {
    STRGUID: string;
    STRAPPDGGUID: string;
    STRNAME: string;
    BUNIQUE: boolean;
    STRTYPE?: string;
}

@Table({
	tableName: "LCAPPINDEX",
	timestamps: false 
})
export class LCAPPINDEX extends Model<LCAPPINDEXAttributes, LCAPPINDEXAttributes> implements LCAPPINDEXAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPDGGUID!: string;

    @Column({
    	type: DataType.STRING(64) 
    })
    	STRNAME!: string;

    @Column({
    	type: DataType.STRING 
    })
    	BUNIQUE!: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(20) 
    })
    	STRTYPE?: string;

}