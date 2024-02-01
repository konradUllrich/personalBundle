import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCMENUPROPAttributes {
    STRMENUGUID: string;
    STRNAME: string;
    STRVALUE?: string;
}

@Table({
	tableName: "LCMENUPROP",
	timestamps: false 
})
export class LCMENUPROP extends Model<LCMENUPROPAttributes, LCMENUPROPAttributes> implements LCMENUPROPAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRMENUGUID!: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRNAME!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(2048) 
    })
    	STRVALUE?: string;

}