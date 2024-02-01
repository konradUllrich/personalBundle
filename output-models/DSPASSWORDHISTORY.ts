import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface DSPASSWORDHISTORYAttributes {
    LUSERID: number;
    TSINSERT: Date;
    STRHASH: string;
    STRSALT?: string;
}

@Table({
	tableName: "DSPASSWORDHISTORY",
	timestamps: false 
})
export class DSPASSWORDHISTORY extends Model<DSPASSWORDHISTORYAttributes, DSPASSWORDHISTORYAttributes> implements DSPASSWORDHISTORYAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LUSERID!: number;

    @Column({
    	type: DataType.DATE(7) 
    })
    	TSINSERT!: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRHASH!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(64) 
    })
    	STRSALT?: string;

}