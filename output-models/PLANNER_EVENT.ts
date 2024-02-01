import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PLANNER_EVENTAttributes {
    DTEDIT?: Date;
    B_ALLOWPROPOSALS?: boolean;
    B_MAIL?: boolean;
    B_URGENT?: boolean;
    FLT_DAUER?: number;
    STR_LOCATION?: string;
    TXT_DESCRIPTION?: string;
    DTINSERT?: Date;
    TXT_DISTRIBUTOR?: string;
    B_IMPORTANT?: boolean;
    LUSERID?: number;
    B_DISTRIBUTOR?: boolean;
    LUSERIDINSERT?: number;
    DT_ENTEREDTIME?: Date;
    STR_TITLE?: string;
    STRID: string;
    B_INVITEPERSONS?: boolean;
    DT_DUMMYDATE?: Date;
    B_PUBLIC?: boolean;
    STR_NOTIFICATION?: string;
    STR_STATUS?: string;
}

@Table({
	tableName: "PLANNER_EVENT",
	timestamps: false 
})
export class PLANNER_EVENT extends Model<PLANNER_EVENTAttributes, PLANNER_EVENTAttributes> implements PLANNER_EVENTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_ALLOWPROPOSALS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_MAIL?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_URGENT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_DAUER?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_LOCATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DESCRIPTION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_DISTRIBUTOR?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_IMPORTANT?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DISTRIBUTOR?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_ENTEREDTIME?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_INVITEPERSONS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_DUMMYDATE?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_PUBLIC?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NOTIFICATION?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STATUS?: string;

}