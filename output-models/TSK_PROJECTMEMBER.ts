import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface TSK_PROJECTMEMBERAttributes {
    L_USERID?: number;
    STR_STATUS?: string;
    STR_RECID?: string;
    LID: number;
    B_SENT?: boolean;
    STR_USERNAME?: string;
    FKSTRID?: string;
    STR_NOTIFICATION?: string;
    DTINSERT?: Date;
    B_NOTIFICATION?: boolean;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    LUSERID?: number;
    REF_828655D8?: number;
    STR_VERTEILER?: string;
    B_FAVORITE?: boolean;
}

@Table({
	tableName: "TSK_PROJECTMEMBER",
	timestamps: false 
})
export class TSK_PROJECTMEMBER extends Model<TSK_PROJECTMEMBERAttributes, TSK_PROJECTMEMBERAttributes> implements TSK_PROJECTMEMBERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_USERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_RECID?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_SENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_USERNAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NOTIFICATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_NOTIFICATION?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	REF_828655D8?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_VERTEILER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_FAVORITE?: boolean;

}